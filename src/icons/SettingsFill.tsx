import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SettingsFillProps = Omit<IconBaseProps, 'children'>;

const SettingsFill = memo(
  forwardRef<SVGSVGElement, SettingsFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="settings-fill" {...props}>
      <path fillRule="evenodd" d="M14.71 2.18a1.5 1.5 0 0 1 1.83-.26l1.92 1.1c.56.33.84.97.72 1.6l-.03.12-.5 1.76a2 2 0 0 0 1.44 2.49l1.77.45.13.03c.6.2 1.01.78 1.01 1.42v2.22a1.5 1.5 0 0 1-1.01 1.42l-.13.03-1.77.45a2 2 0 0 0-1.44 2.49l.5 1.76a1.5 1.5 0 0 1-.58 1.64l-.1.07-1.93 1.11a1.5 1.5 0 0 1-1.83-.26l-1.27-1.31a2 2 0 0 0-2.88 0L9.3 21.82c-.48.5-1.23.6-1.83.26l-1.92-1.1a1.5 1.5 0 0 1-.7-1.72l.51-1.76A2 2 0 0 0 3.91 15l-1.77-.44A1.5 1.5 0 0 1 1 13.11v-2.22c0-.69.47-1.29 1.14-1.45l1.77-.45A2 2 0 0 0 5.35 6.5l-.5-1.76a1.5 1.5 0 0 1 .69-1.71l1.92-1.11a1.5 1.5 0 0 1 1.83.26l1.27 1.31a2 2 0 0 0 2.88 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

SettingsFill.displayName = 'SettingsFill';

// Triple export pattern (lucide-react style)
export { SettingsFill, SettingsFill as SettingsFillIcon, SettingsFill as SiSettingsFill };
export default SettingsFill;
export type { SettingsFillProps };
