import { ICh5AnimationAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-animation/interfaces/i-ch5-animation-attributes';
import { ICh5BackgroundAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-background/interfaces';
import { ICh5ButtonAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-button/interfaces';
import { ICh5ButtonListAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-button-list/interfaces/i-ch5-button-list-attributes';
import { ICh5ColorChipAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-color-chip/interfaces/i-ch5-color-chip-attributes';
import { ICh5ColorPickerAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-color-picker/interfaces/i-ch5-color-picker-attributes';
import { ICh5DpadAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-dpad/interfaces/i-ch5-dpad-attributes';
import { ICh5DateTimeAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-datetime/interfaces/i-ch5-datetime-attributes';
import { ICh5FormAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-form/interfaces/i-ch5-form-attributes';
import { ICh5ImageAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-image/interfaces/i-ch5-image-attributes';
import { ICh5ImportHtmlSnippetAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-import-htmlsnippet/interfaces/i-ch5-import-htmlsnippet-attributes';
import { ICh5KeypadAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-keypad/interfaces/i-ch5-keypad-attributes';
import { ICh5JoinToTextBooleanAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-jointotext-boolean/interfaces';
import { ICh5JoinToTextNumericAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-jointotext-numeric/interfaces/i-ch5-jointotext-numeric-attributes';
import { ICh5JoinToTextStringAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-jointotext-string/interfaces/i-ch5-jointotext-string-attributes';
import { ICh5ListAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-list/interfaces';
import { ICh5ModalDialogAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-modal-dialog/interfaces/i-ch5-modal-dialog-attributes';
import { ICh5OverlayPanelAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-overlay-panel/interfaces';
import { ICh5QrCodeAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-qrcode/interfaces/i-ch5-qrcode-attributes';
import { ICh5SegmentedGaugeAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-segmented-gauge/interfaces/i-ch5-segmented-gauge-attributes';
import { ICh5SelectAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-select/interfaces';
import { ICh5SelectOptionAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-select-option/interfaces/i-ch5-select-option-attributes';
import { ICh5SignalLevelGaugeAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-signal-level-gauge/interfaces/i-ch5-signal-level-gauge-attributes';
import { ICh5SliderAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-slider/interfaces';
import { ICh5SpinnerAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-spinner/interfaces';
import { ICh5SubpageReferenceListAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-subpage-reference-list/interfaces/i-ch5-subpage-reference-list-attributes';
import { ICh5TabButtonAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-tab-button/interfaces/i-ch5-tab-button-attributes';
import { ICh5TemplateAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-template/interfaces/i-ch5-template-attributes';
import { ICh5TextAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-text/interfaces/i-ch5-text-attributes';
import { ICh5TextInputAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-textinput/interfaces';
import { ICh5ToggleAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-toggle/interfaces/i-ch5-toggle-attributes';
import { ICh5TriggerViewAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-triggerview/interfaces/i-ch5-triggerview-attributes';
import { ICh5VideoAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-video/interfaces';
import { ICh5VideoSwitcherAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-video-switcher/interfaces';
import { ICh5WifiSignalLevelGaugeAttributes } from '@crestron/ch5-crcomlib/build_bundles/umd/@types/ch5-wifi-signal-level-gauge/interfaces/i-ch5-wifi-signal-level-gauge-attributes';

declare global {
  interface Window {
    CrComLib: typeof import("@crestron/ch5-crcomlib/build_bundles/umd/@types/index");
    WebXPanel: typeof import("@crestron/ch5-webxpanel/dist/types/index");
  }
}

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        'ch5-animation': DefineComponent<Partial<ICh5AnimationAttributes>>;
        'ch5-background': DefineComponent<Partial<ICh5BackgroundAttributes>>;
        'ch5-button': DefineComponent<Partial<ICh5ButtonAttributes>>;
        'ch5-button-list': DefineComponent<Partial<ICh5ButtonListAttributes>>;
        'ch5-color-chip': DefineComponent<Partial<ICh5ColorChipAttributes>>;
        'ch5-color-picker': DefineComponent<Partial<ICh5ColorPickerAttributes>>;
        'ch5-dpad': DefineComponent<Partial<ICh5DpadAttributes>>;
        'ch5-datetime': DefineComponent<Partial<ICh5DateTimeAttributes>>;
        'ch5-form': DefineComponent<Partial<ICh5FormAttributes>>;
        'ch5-image': DefineComponent<Partial<ICh5ImageAttributes>>;
        'ch5-import-htmlsnippet': DefineComponent<Partial<ICh5ImportHtmlSnippetAttributes>>;
        'ch5-keypad': DefineComponent<Partial<ICh5KeypadAttributes>>;
        'ch5-jointottext-boolean': DefineComponent<Partial<ICh5JoinToTextBooleanAttributes>>;
        'ch5-jointottext-numeric': DefineComponent<Partial<ICh5JoinToTextNumericAttributes>>;
        'ch5-jointottext-string': DefineComponent<Partial<ICh5JoinToTextStringAttributes>>;
        'ch5-list': DefineComponent<Partial<ICh5ListAttributes>>;
        'ch5-modal-dialog': DefineComponent<Partial<ICh5ModalDialogAttributes>>;
        'ch5-overlay-panel': DefineComponent<Partial<ICh5OverlayPanelAttributes>>;
        'ch5-qrcode': DefineComponent<Partial<ICh5QrCodeAttributes>>;
        'ch5-segmented-gauge': DefineComponent<Partial<ICh5SegmentedGaugeAttributes>>;
        'ch5-select': DefineComponent<Partial<ICh5SelectAttributes>>;
        'ch5-select-option': DefineComponent<Partial<ICh5SelectOptionAttributes>>;
        'ch5-signal-level-gauge': DefineComponent<Partial<ICh5SignalLevelGaugeAttributes>>;
        'ch5-slider': DefineComponent<Partial<ICh5SliderAttributes>>;
        'ch5-spinner': DefineComponent<Partial<ICh5SpinnerAttributes>>;
        'ch5-subpage-reference-list': DefineComponent<Partial<ICh5SubpageReferenceListAttributes>>;
        'ch5-tab-button': DefineComponent<Partial<ICh5TabButtonAttributes>>;
        'ch5-template': DefineComponent<Partial<ICh5TemplateAttributes>>;
        'ch5-text': DefineComponent<Partial<ICh5TextAttributes>>;
        'ch5-textinput': DefineComponent<Partial<ICh5TextInputAttributes>>;
        'ch5-toggle': DefineComponent<Partial<ICh5ToggleAttributes>>;
        'ch5-triggerview': DefineComponent<Partial<ICh5TriggerViewAttributes>>;
        'ch5-video': DefineComponent<Partial<ICh5VideoAttributes>>;
        'ch5-video-switcher': DefineComponent<Partial<ICh5VideoSwitcherAttributes>>;
        'ch5-wifi-signal-level-gauge': DefineComponent<Partial<ICh5WifiSignalLevelGaugeAttributes>>;
    }
}