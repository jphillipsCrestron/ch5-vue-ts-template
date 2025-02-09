<template>
  <p style="color: white;">Joins</p>
  <div id="controlGroupWrapper">
    <div class="controlGroup">
      <button id="sendDigitalButton" class="btn" @click="sendDigital(!digitalState)">Toggle Digital</button>
      <p id="currentDigitalValue">{{ digitalState }}</p>
    </div>
    <div class="controlGroup">
      <p id="currentAnalogValue">{{ analogState }}</p>
      <input type="range" min="0" max="65535" v-model="analogState" placeholder="32767" id="analogSlider" @input="sendAnalog(analogState)" />
    </div>
    <div class="controlGroup">
      <input type="text" name="Data" id="currentSerialValue" placeholder="Placeholder" v-model="serialState" @input="sendSerial(serialState)" />
    </div>
  </div>
  <p style="color: white;">Contracts</p>
  <div id="controlGroupWrapper">
    <div class="controlGroup">
      <button id="sendDigitalButton" class="btn" @click="sendDigitalContract(!digitalContractState)">Toggle Digital</button>
      <p id="currentDigitalValue">{{ digitalContractState }}</p>
    </div>
    <div class="controlGroup">
      <p id="currentAnalogValue">{{ analogContractState }}</p>
      <input type="range" min="0" max="65535" v-model="analogContractState" placeholder="32767" id="analogSlider" @input="sendAnalogContract(analogContractState)" />
    </div>
    <div class="controlGroup">
      <input type="text" name="Data" id="currentSerialValue" placeholder="Placeholder" v-model="serialContractState" @input="sendSerialContract(serialContractState)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import useWebXPanel from './composables/useWebXPanel';

export default defineComponent({
  setup() {
    const digitalState = ref(false);
    const analogState = ref(0);
    const serialState = ref("");
    const digitalContractState = ref(false);
    const analogContractState = ref(0);
    const serialContractState = ref("");

    const webXPanelConfig = {
      ipId: '0x03',
      host: '0.0.0.0',
      roomId: '',
      authToken: ''
    };

    useWebXPanel(webXPanelConfig);

    onMounted(() => {
      // Listen for digital, analog, and serial joins 1 from the control system.
      // d1Id, a1Id, and s1Id are the subscription IDs for each join, they are 
      // only used to unsubscribe from the join when the component unmounts
      const d1Id = window.CrComLib.subscribeState('b', '1', (value: boolean) => digitalState.value = value);
      const a1Id = window.CrComLib.subscribeState('n', '1', (value: number) => analogState.value = value);
      const s1Id = window.CrComLib.subscribeState('s', '1', (value: string) => serialState.value = value);

      // Contracts
      const dc1Id = window.CrComLib.subscribeState('b', 'HomePage.DigitalState', (value: boolean) => digitalContractState.value = value);
      const ac1Id = window.CrComLib.subscribeState('n', 'HomePage.AnalogState', (value: number) => analogContractState.value = value);
      const sc1Id = window.CrComLib.subscribeState('s', 'HomePage.StringState', (value: string) => serialContractState.value = value);

      onUnmounted(() => {
        window.CrComLib.unsubscribeState('b', '1', d1Id);
        window.CrComLib.unsubscribeState('n', '1', a1Id);
        window.CrComLib.unsubscribeState('s', '1', s1Id);

        // Contracts
        window.CrComLib.unsubscribeState('b', 'HomePage.DigitalState', dc1Id);
        window.CrComLib.unsubscribeState('n', 'HomePage.AnalogState', ac1Id);
        window.CrComLib.unsubscribeState('s', 'HomePage.StringState', sc1Id);
      });
    });

    const sendDigital = (value: boolean) => window.CrComLib.publishEvent('b', '1', value);
    const sendAnalog = (value: number) => window.CrComLib.publishEvent('n', '1', value);
    const sendSerial = (value: string) => window.CrComLib.publishEvent('s', '1', value);

    // Contracts
    const sendDigitalContract = (value: boolean) => window.CrComLib.publishEvent('b', 'HomePage.DigitalEvent', value);
    const sendAnalogContract = (value: number) => window.CrComLib.publishEvent('n', 'HomePage.AnalogEvent', value);
    const sendSerialContract = (value: string) => window.CrComLib.publishEvent('s', 'HomePage.StringEvent', value);

    return { 
      digitalState, 
      analogState, 
      serialState, 
      digitalContractState,
      analogContractState, 
      serialContractState, 
      sendDigital, 
      sendAnalog, 
      sendSerial, 
      sendDigitalContract, 
      sendAnalogContract, 
      sendSerialContract 
    };
  }
});
</script>

<style>
@import './assets/css/App.css';
</style>