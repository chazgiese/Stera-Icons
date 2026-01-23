import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeadphonesBoldProps = Omit<IconBaseProps, 'children'>;

const HeadphonesBold = memo(
  forwardRef<SVGSVGElement, HeadphonesBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="headphones-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.3 1c3.2.1 6.04 1.53 8 3.77 1.78 2.05 2.3 4.56 2.25 7.06-.03 2.48-.62 5.08-1.13 7.39a1 1 0 0 1-1 .78l-.03.1a3 3 0 0 1-5.85-1.3l.65-2.93a3 3 0 0 1 5.13-1.39q.2-1.36.23-2.68c.04-2.22-.42-4.17-1.77-5.71A9 9 0 0 0 12.5 3L12 3l-.5.01A9 9 0 0 0 5.22 6.1c-1.35 1.54-1.8 3.49-1.77 5.71q.02 1.32.23 2.68.62-.66 1.56-.89a3 3 0 0 1 3.57 2.28l.65 2.93a3 3 0 0 1-5.85 1.3l-.03-.1a1 1 0 0 1-1-.78c-.51-2.3-1.1-4.9-1.13-7.39-.04-2.5.47-5.01 2.26-7.06A11 11 0 0 1 12 1zM6.87 16.3a1 1 0 0 0-1.95.44l.65 2.92a1 1 0 1 0 1.95-.43zm11.47-.76a1 1 0 0 0-1.2.76l-.64 2.93a1 1 0 0 0 1.95.43l.65-2.92a1 1 0 0 0-.76-1.2" clipRule="evenodd" />
    </IconBase>
  ))
);

HeadphonesBold.displayName = 'HeadphonesBold';

// Triple export pattern (lucide-react style)
export { HeadphonesBold, HeadphonesBold as HeadphonesBoldIcon, HeadphonesBold as SiHeadphonesBold };
export default HeadphonesBold;
export type { HeadphonesBoldProps };
