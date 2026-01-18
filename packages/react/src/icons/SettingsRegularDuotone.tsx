import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SettingsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SettingsRegularDuotone = memo(
  forwardRef<SVGSVGElement, SettingsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.62 2.63c.56-.58 1.44-.7 2.13-.3l1.25.72c.7.4 1.03 1.22.8 2l-.1.39c-.51 1.76.55 3.6 2.33 4.04l.4.1c.77.2 1.32.9 1.32 1.7v1.44c0 .8-.55 1.5-1.33 1.7l-.39.1a3.25 3.25 0 0 0-2.34 4.04l.12.4c.22.76-.12 1.59-.81 1.99l-1.25.72c-.7.4-1.57.28-2.13-.3l-.28-.3a3.25 3.25 0 0 0-4.68 0l-.28.3c-.56.58-1.44.7-2.13.3L6 20.95a1.75 1.75 0 0 1-.8-2l.1-.39c.51-1.76-.55-3.6-2.33-4.04l-.4-.1c-.77-.2-1.32-.9-1.32-1.7v-1.44c0-.8.55-1.5 1.33-1.7l.4-.1A3.25 3.25 0 0 0 5.3 5.44l-.11-.4c-.23-.77.1-1.59.8-1.99l1.25-.72c.7-.4 1.57-.28 2.13.3l.28.3a3.25 3.25 0 0 0 4.68 0zm1.38 1a.25.25 0 0 0-.3.04l-.29.3a4.75 4.75 0 0 1-6.83 0l-.28-.3a.25.25 0 0 0-.3-.04l-1.25.72a.3.3 0 0 0-.11.28l.1.4a4.75 4.75 0 0 1-3.4 5.9l-.4.1a.25.25 0 0 0-.19.25v1.44q.01.18.19.24l.4.1a4.75 4.75 0 0 1 3.4 5.92l-.1.39q-.04.17.11.28l1.25.72q.17.09.3-.04l.28-.3a4.75 4.75 0 0 1 6.83 0l.29.3q.13.13.3.04l1.25-.72q.15-.1.11-.28l-.1-.4a4.75 4.75 0 0 1 3.4-5.91l.4-.1a.25.25 0 0 0 .19-.24v-1.44a.25.25 0 0 0-.19-.24l-.4-.1a4.75 4.75 0 0 1-3.4-5.91l.1-.4a.3.3 0 0 0-.11-.28z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SettingsRegularDuotone.displayName = 'SettingsRegularDuotone';

export { SettingsRegularDuotone };
export type { SettingsRegularDuotoneProps };
