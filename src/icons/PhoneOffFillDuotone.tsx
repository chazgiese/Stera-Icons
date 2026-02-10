import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PhoneOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PhoneOffFillDuotone = memo(
  forwardRef<SVGSVGElement, PhoneOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="phone-off-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 8q2.74-.04 5.52.5C21 9.18 23 10.88 23 13.82c0 1.11 0 2.37-1.13 2.16l-3.12-.83c-2.42-.63-1.92-.97-1.92-2.17 0-1.66-3.3-1.44-4.83-1.44s-4.83-.22-4.83 1.44c0 1.2.5 1.54-1.92 2.17l-3.12.83C1 16.19 1 14.93 1 13.82c0-2.94 2-4.64 5.48-5.32Q9.26 7.96 12 8" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12.01 7q2.83-.03 5.7.52a9 9 0 0 1 4.54 2.06A5.6 5.6 0 0 1 24 13.81c0 .5.01 1.29-.2 1.9-.1.33-.3.74-.73 1.01q-.58.35-1.22.26l-.17-.02-.03-.01h-.04l-3.11-.83a9 9 0 0 1-1.5-.5 2 2 0 0 1-.99-.85 2 2 0 0 1-.22-1.07c.02-.34.04-.42.04-.72 0 0 .03-.02-.08-.08a3 3 0 0 0-.9-.28c-.92-.13-2-.08-2.85-.08-.84 0-1.93-.05-2.84.08q-.69.12-.91.28c-.1.06-.08.07-.08.08 0 .3.02.38.04.72 0 .25 0 .66-.22 1.07-.24.41-.61.67-1 .85q-.56.26-1.49.5l-3.11.82-.04.01h-.03c-.46.1-.96.06-1.4-.23a2 2 0 0 1-.73-1.01C0 15.1 0 14.31 0 13.81q.01-2.6 1.75-4.23A9 9 0 0 1 6.3 7.52q2.88-.55 5.7-.52zm-.02 2q-2.64-.04-5.32.48-2.44.5-3.55 1.56A3.6 3.6 0 0 0 2 13.81a12 12 0 0 0 .06 1.15L5 14.18a7 7 0 0 0 1.14-.37l.07-.04c0-.09-.04-.5-.04-.79 0-.82.44-1.41 1-1.77.5-.32 1.13-.48 1.69-.56 1.11-.17 2.44-.11 3.14-.11s2.03-.06 3.14.1c.56.1 1.18.25 1.7.57.55.36 1 .95 1 1.77 0 .3-.04.7-.05.8l.07.03c.2.1.55.22 1.14.37l2.94.78.04-.37q.02-.35.02-.78-.02-1.78-1.12-2.77a7 7 0 0 0-3.55-1.56Q14.65 8.96 12 9z" clipRule="evenodd" />
    </IconBase>
  ))
);

PhoneOffFillDuotone.displayName = 'PhoneOffFillDuotone';

// Triple export pattern (lucide-react style)
export { PhoneOffFillDuotone, PhoneOffFillDuotone as PhoneOffFillDuotoneIcon, PhoneOffFillDuotone as SiPhoneOffFillDuotone };
export default PhoneOffFillDuotone;
export type { PhoneOffFillDuotoneProps };
