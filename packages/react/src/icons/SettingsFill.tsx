import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SettingsFillProps = Omit<IconBaseProps, 'children'>;

const SettingsFill = memo(
  forwardRef<SVGSVGElement, SettingsFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.44 2.46a2 2 0 0 1 2.44-.35l1.24.72a2 2 0 0 1 .93 2.28l-.12.4a3 3 0 0 0 2.16 3.73l.4.1A2 2 0 0 1 23 11.28v1.44a2 2 0 0 1-1.51 1.94l-.4.1a3 3 0 0 0-2.16 3.73l.12.4a2 2 0 0 1-.93 2.28l-1.24.72a2 2 0 0 1-2.44-.35l-.28-.29a3 3 0 0 0-4.32 0l-.28.3a2 2 0 0 1-2.44.34l-1.24-.72a2 2 0 0 1-.93-2.29l.12-.39a3 3 0 0 0-2.16-3.73l-.4-.1A2 2 0 0 1 1 12.72v-1.44a2 2 0 0 1 1.51-1.94l.4-.1a3 3 0 0 0 2.16-3.73l-.11-.4a2 2 0 0 1 .92-2.28l1.24-.72a2 2 0 0 1 2.44.35l.28.29a3 3 0 0 0 4.32 0zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" />
    </IconBase>
  ))
);

SettingsFill.displayName = 'SettingsFill';

// Triple export pattern (lucide-react style)
export { SettingsFill, SettingsFill as SettingsFillIcon, SettingsFill as SiSettingsFill };
export type { SettingsFillProps };
