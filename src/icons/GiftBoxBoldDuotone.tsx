import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GiftBoxBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GiftBoxBoldDuotone = memo(
  forwardRef<SVGSVGElement, GiftBoxBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gift-box-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v6.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 16.43 1 15.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3zM6.8 5c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 3 8.8V11h3.93l.15.16a6.7 6.7 0 0 0 3.5 1.71l-.07.13H3v2.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H11v-3.26a9 9 0 0 0 1-1.32 9 9 0 0 0 1 1.32V19h4.2c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V13h-7.5l-.08-.13A6.7 6.7 0 0 0 17.07 11H21V8.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C18.64 5 18.06 5 17.2 5H13v1.93l-.15.15q-.48.47-.85 1.1a6 6 0 0 0-1-1.25V5z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M14.88 6.02c.83-.1 1.62.2 2.26.84s.94 1.43.84 2.26a3.5 3.5 0 0 1-1.06 2.04 6.7 6.7 0 0 1-3.5 1.71q.17.34.41.7a5.7 5.7 0 0 0 3.41 2.46 1 1 0 0 1-.48 1.94A7.7 7.7 0 0 1 12 14.42l-.17.26a7.7 7.7 0 0 1-4.59 3.29 1 1 0 0 1-.48-1.94 5.7 5.7 0 0 0 3.4-2.46q.25-.37.42-.7a6.7 6.7 0 0 1-3.5-1.71 3.5 3.5 0 0 1-1.06-2.04c-.1-.83.2-1.62.84-2.26a2.7 2.7 0 0 1 2.26-.84c.79.08 1.48.5 2.03 1.06q.48.47.85 1.1.37-.62.85-1.1a3.5 3.5 0 0 1 2.03-1.06M8.9 8c-.17-.01-.38.02-.63.27S8 8.73 8 8.9c.03.2.16.5.5.84.5.5 1.35.96 2.4 1.16a4.7 4.7 0 0 0-1.16-2.4c-.33-.34-.64-.47-.84-.5m6.2 0c-.2.03-.5.16-.84.5-.5.5-.96 1.35-1.16 2.4 1.05-.2 1.9-.65 2.4-1.16.34-.33.47-.64.5-.84.02-.17-.02-.38-.27-.63S15.28 8 15.1 8" clipRule="evenodd" />
    </IconBase>
  ))
);

GiftBoxBoldDuotone.displayName = 'GiftBoxBoldDuotone';

// Triple export pattern (lucide-react style)
export { GiftBoxBoldDuotone, GiftBoxBoldDuotone as GiftBoxBoldDuotoneIcon, GiftBoxBoldDuotone as SiGiftBoxBoldDuotone };
export default GiftBoxBoldDuotone;
export type { GiftBoxBoldDuotoneProps };
