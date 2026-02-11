import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SettingsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SettingsFillDuotone = memo(
  forwardRef<SVGSVGElement, SettingsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="settings-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.44 2.46a2 2 0 0 1 2.44-.35l1.24.72a2 2 0 0 1 .93 2.29l-.12.39a3 3 0 0 0 2.16 3.73l.4.1A2 2 0 0 1 23 11.28v1.44a2 2 0 0 1-1.51 1.94l-.4.1a3 3 0 0 0-2.16 3.73l.12.4a2 2 0 0 1-.93 2.28l-1.24.72a2 2 0 0 1-2.44-.35l-.28-.29a3 3 0 0 0-4.32 0l-.28.3a2 2 0 0 1-2.44.34l-1.24-.72a2 2 0 0 1-.93-2.28l.12-.4a3 3 0 0 0-2.16-3.73l-.4-.1A2 2 0 0 1 1 12.72v-1.44a2 2 0 0 1 1.51-1.94l.4-.1a3 3 0 0 0 2.16-3.73l-.11-.4a2 2 0 0 1 .92-2.28l1.24-.72a2 2 0 0 1 2.44.35l.28.29a3 3 0 0 0 4.32 0zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" opacity={.4} />
        <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

SettingsFillDuotone.displayName = 'SettingsFillDuotone';

// Triple export pattern (lucide-react style)
export { SettingsFillDuotone, SettingsFillDuotone as SettingsFillDuotoneIcon, SettingsFillDuotone as SiSettingsFillDuotone };
export default SettingsFillDuotone;
export type { SettingsFillDuotoneProps };
