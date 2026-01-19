import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HeadphonesFillProps = Omit<IconBaseProps, 'children'>;

const HeadphonesFill = memo(
  forwardRef<SVGSVGElement, HeadphonesFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="headphones-fill" {...props}>
      <path fill="currentColor" d="M12.3 1c3.2.1 6.04 1.53 8 3.77 1.78 2.05 2.3 4.56 2.25 7.06-.03 2.48-.62 5.08-1.13 7.39a1 1 0 0 1-1 .78l-.03.1a3 3 0 0 1-5.85-1.3l.65-2.93a3 3 0 0 1 5.13-1.39q.2-1.36.23-2.68c.04-2.22-.42-4.17-1.77-5.71A9 9 0 0 0 12.5 3L12 3l-.5.01A9 9 0 0 0 5.22 6.1c-1.35 1.54-1.8 3.49-1.77 5.71q.02 1.32.23 2.68.62-.66 1.56-.89a3 3 0 0 1 3.57 2.28l.65 2.93a3 3 0 0 1-5.85 1.3l-.03-.1a1 1 0 0 1-1-.78c-.51-2.3-1.1-4.9-1.13-7.39-.04-2.5.47-5.01 2.26-7.06A11 11 0 0 1 12 1z" />
    </IconBase>
  ))
);

HeadphonesFill.displayName = 'HeadphonesFill';

// Triple export pattern (lucide-react style)
export { HeadphonesFill, HeadphonesFill as HeadphonesFillIcon, HeadphonesFill as SiHeadphonesFill };
export default HeadphonesFill;
export type { HeadphonesFillProps };
