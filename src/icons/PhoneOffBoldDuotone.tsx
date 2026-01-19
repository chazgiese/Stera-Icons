import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PhoneOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PhoneOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, PhoneOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="phone-off-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 10.54c.7 0 2.03-.06 3.14.1.56.1 1.18.25 1.7.57.55.36 1 .95 1 1.77 0 .3-.04.7-.05.8l.07.03c.2.1.55.22 1.14.37l-.5 1.94a9 9 0 0 1-1.5-.5 2 2 0 0 1-.99-.85 2 2 0 0 1-.22-1.07c.02-.34.04-.42.04-.72 0 0 .03-.01-.08-.08q-.23-.16-.9-.27c-.92-.14-2-.1-2.85-.1-.84 0-1.93-.04-2.84.1q-.69.11-.91.27c-.11.07-.08.07-.08.08 0 .3.02.38.04.72 0 .25 0 .66-.22 1.07-.24.42-.61.67-1 .85a9 9 0 0 1-1.48.5L5 14.18c.58-.15.93-.27 1.13-.37q.04 0 .07-.03c0-.1-.04-.5-.04-.8 0-.82.44-1.4 1-1.77.5-.32 1.13-.48 1.69-.56 1.11-.17 2.44-.11 3.14-.11" opacity={.4} />
        <path fill="currentColor" d="M12.01 7q2.83-.03 5.7.52a9 9 0 0 1 4.54 2.06A5.6 5.6 0 0 1 24 13.81c0 .5.01 1.29-.2 1.9-.1.33-.3.74-.73 1.01q-.58.35-1.22.26l-.17-.02-.03-.01h-.04l-3.12-.83.51-1.94 2.94.78.04-.37q.02-.35.02-.78-.02-1.78-1.12-2.77a7 7 0 0 0-3.55-1.56Q14.65 8.96 12 9h-.02q-2.64-.04-5.32.48-2.44.5-3.55 1.56A3.6 3.6 0 0 0 2 13.81a12 12 0 0 0 .06 1.15L5 14.18l.5 1.94-3.11.82-.04.01h-.03c-.46.1-.96.06-1.4-.23a2 2 0 0 1-.73-1.01C0 15.1 0 14.31 0 13.81q.01-2.6 1.75-4.23A9 9 0 0 1 6.3 7.52q2.88-.55 5.7-.52z" />
    </IconBase>
  ))
);

PhoneOffBoldDuotone.displayName = 'PhoneOffBoldDuotone';

// Triple export pattern (lucide-react style)
export { PhoneOffBoldDuotone, PhoneOffBoldDuotone as PhoneOffBoldDuotoneIcon, PhoneOffBoldDuotone as SiPhoneOffBoldDuotone };
export type { PhoneOffBoldDuotoneProps };
