import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SettingsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SettingsBoldDuotone = memo(
  forwardRef<SVGSVGElement, SettingsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.44 2.46a2 2 0 0 1 2.44-.35l1.24.72a2 2 0 0 1 .93 2.29l-.12.39a3 3 0 0 0 2.16 3.73l.4.1A2 2 0 0 1 23 11.28v1.44a2 2 0 0 1-1.51 1.94l-.4.1a3 3 0 0 0-2.16 3.73l.12.4a2 2 0 0 1-.93 2.28l-1.24.72a2 2 0 0 1-2.44-.35l-.28-.29a3 3 0 0 0-4.32 0l-.28.3a2 2 0 0 1-2.44.34l-1.24-.72a2 2 0 0 1-.93-2.28l.12-.4a3 3 0 0 0-2.16-3.73l-.4-.1A2 2 0 0 1 1 12.72v-1.44a2 2 0 0 1 1.51-1.94l.4-.1a3 3 0 0 0 2.16-3.73l-.11-.4a2 2 0 0 1 .92-2.28l1.24-.72a2 2 0 0 1 2.44.35l.28.29a3 3 0 0 0 4.32 0zm1.15 1.68a5 5 0 0 1-7.18 0l-.29-.3-1.24.73.1.39a5 5 0 0 1-3.58 6.22l-.4.1v1.44l.4.1a5 5 0 0 1 3.59 6.22l-.11.4 1.24.71.29-.29a5 5 0 0 1 7.18 0l.29.3 1.24-.72-.1-.4a5 5 0 0 1 3.59-6.22l.39-.1v-1.44l-.4-.1a5 5 0 0 1-3.59-6.22l.11-.4-1.24-.71z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

SettingsBoldDuotone.displayName = 'SettingsBoldDuotone';

export { SettingsBoldDuotone };
export type { SettingsBoldDuotoneProps };
