import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeadphonesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeadphonesFillDuotone = memo(
  forwardRef<SVGSVGElement, HeadphonesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="headphones-fill-duotone" {...props}>
      <path d="M12.28 2.1c2.9.08 5.48 1.4 7.26 3.43 1.63 1.87 2.1 4.15 2.06 6.42-.04 2.25-.56 4.6-1.02 6.67a1 1 0 0 1-.93.78l.59-2.63c.22-1-.13-2-.83-2.65q.16-1.12.19-2.2c.03-1.99-.38-3.71-1.57-5.08a8 8 0 0 0-5.58-2.73h-.9a8 8 0 0 0-5.58 2.73c-1.19 1.37-1.6 3.1-1.57 5.08q.02 1.09.19 2.2a2.8 2.8 0 0 0-.83 2.65l.59 2.63a1 1 0 0 1-.93-.78c-.46-2.07-.98-4.42-1.02-6.67-.03-2.27.43-4.55 2.06-6.42A10 10 0 0 1 12 2.1z" opacity={.4} />
        <path d="M5.89 13.43a2.8 2.8 0 0 1 3.34 2.13l.59 2.64a2.8 2.8 0 0 1-5.47 1.21l-.59-2.64c-.33-1.5.62-3 2.13-3.34M14.77 15.56a2.8 2.8 0 0 1 5.47 1.21l-.59 2.64a2.8 2.8 0 0 1-5.47-1.21z" />
    </IconBase>
  ))
);

HeadphonesFillDuotone.displayName = 'HeadphonesFillDuotone';

// Triple export pattern (lucide-react style)
export { HeadphonesFillDuotone, HeadphonesFillDuotone as HeadphonesFillDuotoneIcon, HeadphonesFillDuotone as SiHeadphonesFillDuotone };
export default HeadphonesFillDuotone;
export type { HeadphonesFillDuotoneProps };
