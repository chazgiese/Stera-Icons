import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GiftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GiftBoldDuotone = memo(
  forwardRef<SVGSVGElement, GiftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gift-bold-duotone" {...props}>
      <path d="M20 16.8q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H8.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4v-2.94q.3.1.6.12.4.02.9.02H6v2.8c0 .58 0 .95.02 1.23.03.27.06.38.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H11v-5h2v5h2.8c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09a1 1 0 0 0 .44-.44c.03-.04.06-.15.09-.42.02-.28.02-.65.02-1.23V14h.5q.5 0 .9-.02.3-.02.6-.12z" opacity={0.4} />
        <path fillRule="evenodd" d="M14.88 2.02c.83-.1 1.62.2 2.26.84s.94 1.43.84 2.26A3.4 3.4 0 0 1 17.07 7H6.93a3.4 3.4 0 0 1-.91-1.88c-.1-.83.2-1.62.84-2.26a2.7 2.7 0 0 1 2.26-.84c.79.08 1.48.5 2.03 1.06q.48.48.85 1.1.37-.62.85-1.1a3.5 3.5 0 0 1 2.03-1.06M8.9 4c-.18-.01-.38.02-.63.27S8 4.73 8 4.9c.03.2.16.5.5.84.5.5 1.35.96 2.4 1.16a4.7 4.7 0 0 0-1.16-2.4c-.34-.34-.64-.47-.84-.5m6.2 0c-.2.03-.5.16-.84.5-.5.5-.96 1.35-1.16 2.4 1.05-.2 1.9-.65 2.4-1.16.34-.33.47-.64.5-.84.01-.17-.02-.38-.27-.63S15.28 4 15.1 4" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M18.5 7q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v1q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02h-13q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87q-.03-.4-.02-.9v-1q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.14.76-.17Q5 7 5.5 7zM13 12h5.5l.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74v-1l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L18.5 9H13zM5.5 9l-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74v1l.03.87q.04.06.1.1l.13.02.74.01H11V9z" clipRule="evenodd" />
    </IconBase>
  ))
);

GiftBoldDuotone.displayName = 'GiftBoldDuotone';

// Triple export pattern (lucide-react style)
export { GiftBoldDuotone, GiftBoldDuotone as GiftBoldDuotoneIcon, GiftBoldDuotone as SiGiftBoldDuotone };
export default GiftBoldDuotone;
export type { GiftBoldDuotoneProps };
