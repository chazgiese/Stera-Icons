import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GiftBoxFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GiftBoxFillDuotone = memo(
  forwardRef<SVGSVGElement, GiftBoxFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gift-box-fill-duotone" {...props}>
      <path d="M1 13h9.5q-.13.27-.33.57a5.7 5.7 0 0 1-3.41 2.46 1 1 0 1 0 .48 1.94A7.5 7.5 0 0 0 11 15.74V21H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 16.43 1 15.2zM23 15.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H13v-5.26a7.5 7.5 0 0 0 3.76 2.23 1 1 0 1 0 .48-1.94A5.7 5.7 0 0 1 13.5 13H23zM11 3v3.93a3.4 3.4 0 0 0-1.88-.91c-.83-.1-1.62.2-2.26.84a2.7 2.7 0 0 0-.84 2.26c.08.71.44 1.35.91 1.88H1V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3z" opacity={0.4} />
        <path d="M8.9 8c.2.03.5.16.84.5.5.5.96 1.35 1.16 2.4a4.7 4.7 0 0 1-2.4-1.16c-.34-.34-.47-.64-.5-.84-.01-.18.02-.38.27-.63S8.72 8 8.9 8M15.1 8c.18-.01.38.02.63.27s.29.45.27.63c-.03.2-.16.5-.5.84-.5.5-1.35.96-2.4 1.16.2-1.05.65-1.9 1.16-2.4.34-.34.64-.47.84-.5" opacity={0.4} />
        <path d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V11h-5.93c.48-.53.83-1.17.91-1.88.1-.83-.2-1.62-.84-2.26a2.7 2.7 0 0 0-2.26-.84c-.71.08-1.35.44-1.88.91V3z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13 6.93a3.4 3.4 0 0 1 1.88-.91c.83-.1 1.62.2 2.26.84s.94 1.43.84 2.26a3.4 3.4 0 0 1-.91 1.88H23v2h-9.5q.13.27.33.57a5.7 5.7 0 0 0 3.41 2.46 1 1 0 1 1-.48 1.94A7.5 7.5 0 0 1 13 15.74V21h-2v-5.26a7.5 7.5 0 0 1-3.76 2.23 1 1 0 1 1-.48-1.94A5.7 5.7 0 0 0 10.5 13H1v-2h5.93a3.4 3.4 0 0 1-.91-1.88c-.1-.83.2-1.62.84-2.26a2.7 2.7 0 0 1 2.26-.84c.71.08 1.35.44 1.88.91V3h2zM8.9 8c-.18-.01-.38.02-.63.27S8 8.72 8 8.9c.03.2.16.5.5.84.5.5 1.35.96 2.4 1.16a4.7 4.7 0 0 0-1.16-2.4c-.34-.34-.64-.47-.84-.5m6.2 0c-.2.03-.5.16-.84.5-.5.5-.96 1.35-1.16 2.4 1.05-.2 1.9-.65 2.4-1.16.34-.34.47-.64.5-.84.02-.18-.02-.38-.27-.63S15.28 8 15.1 8" clipRule="evenodd" />
    </IconBase>
  ))
);

GiftBoxFillDuotone.displayName = 'GiftBoxFillDuotone';

// Triple export pattern (lucide-react style)
export { GiftBoxFillDuotone, GiftBoxFillDuotone as GiftBoxFillDuotoneIcon, GiftBoxFillDuotone as SiGiftBoxFillDuotone };
export default GiftBoxFillDuotone;
export type { GiftBoxFillDuotoneProps };
