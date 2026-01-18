import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HeadphonesBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeadphonesBoldDuotone = memo(
  forwardRef<SVGSVGElement, HeadphonesBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12.3 1c3.2.1 6.04 1.53 8 3.77 1.78 2.05 2.3 4.56 2.25 7.06-.03 2.48-.62 5.08-1.13 7.39a1 1 0 0 1-1 .78l.62-2.83a3 3 0 0 0-.72-2.69q.2-1.36.23-2.68c.04-2.22-.42-4.17-1.77-5.71A9 9 0 0 0 12.5 3L12 3l-.5.01A9 9 0 0 0 5.22 6.1c-1.35 1.54-1.8 3.49-1.77 5.71q.02 1.32.23 2.68a3 3 0 0 0-.72 2.69L3.59 20a1 1 0 0 1-1.01-.78c-.51-2.3-1.1-4.9-1.13-7.39-.04-2.5.47-5.01 2.26-7.06A11 11 0 0 1 12 1z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.24 13.59a3 3 0 0 1 3.57 2.28l.66 2.93a3 3 0 0 1-5.86 1.3l-.65-2.93a3 3 0 0 1 2.28-3.58m1.62 2.71a1 1 0 0 0-1.95.44l.65 2.92a1 1 0 0 0 1.95-.43zM15.19 15.87a3 3 0 0 1 5.85 1.3l-.65 2.93a3 3 0 0 1-5.86-1.3zm3.14-.33a1 1 0 0 0-1.2.76l-.64 2.93a1 1 0 1 0 1.95.43l.65-2.92a1 1 0 0 0-.76-1.2" clipRule="evenodd" />
    </IconBase>
  ))
);

HeadphonesBoldDuotone.displayName = 'HeadphonesBoldDuotone';

// Triple export pattern (lucide-react style)
export { HeadphonesBoldDuotone, HeadphonesBoldDuotone as HeadphonesBoldDuotoneIcon, HeadphonesBoldDuotone as SiHeadphonesBoldDuotone };
export type { HeadphonesBoldDuotoneProps };
