<template>
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
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import useWebXPanel from './composables/useWebXPanel';

export default defineComponent({
  setup() {
    const digitalState = ref(false);
    const analogState = ref(0);
    const serialState = ref("");

    const webXPanelConfig = {
      ipId: '0x03',
      host: '0.0.0.0',
      roomId: '',
      authToken: ''
    };

    useWebXPanel(webXPanelConfig);

    onMounted(() => {
      const d1Id = window.CrComLib.subscribeState('b', '1', (value: boolean) => digitalState.value = value);
      const a1Id = window.CrComLib.subscribeState('n', '1', (value: number) => analogState.value = value);
      const s1Id = window.CrComLib.subscribeState('s', '1', (value: string) => serialState.value = value);

      onUnmounted(() => {
        window.CrComLib.unsubscribeState('b', '1', d1Id);
        window.CrComLib.unsubscribeState('n', '1', a1Id);
        window.CrComLib.unsubscribeState('s', '1', s1Id);
      });
    });

    const sendDigital = (value: boolean) => window.CrComLib.publishEvent('b', '1', value);
    const sendAnalog = (value: number) => window.CrComLib.publishEvent('n', '1', value);
    const sendSerial = (value: string) => window.CrComLib.publishEvent('s', '1', value);

    return { digitalState, analogState, serialState, sendDigital, sendAnalog, sendSerial };
  }
});
</script>

<style scoped>
@import './assets/css/App.css';
</style>