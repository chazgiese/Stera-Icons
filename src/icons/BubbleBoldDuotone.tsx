import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BubbleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BubbleBoldDuotone = memo(
  forwardRef<SVGSVGElement, BubbleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bubble-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10.75 4.6c.39-.09.79-.02 1.11.21q.5.37.62 1.03c.07.41-.02.84-.25 1.16-.23.33-.59.52-.98.56l-.28.03a4.8 4.8 0 0 0-3.9 3.58q-.1.37-.43.6a1 1 0 0 1-.71.15 1 1 0 0 1-.62-.38c-.16-.2-.24-.46-.21-.7q.02-.23.06-.44a7.3 7.3 0 0 1 5.6-5.8" />
    </IconBase>
  ))
);

BubbleBoldDuotone.displayName = 'BubbleBoldDuotone';

// Triple export pattern (lucide-react style)
export { BubbleBoldDuotone, BubbleBoldDuotone as BubbleBoldDuotoneIcon, BubbleBoldDuotone as SiBubbleBoldDuotone };
export type { BubbleBoldDuotoneProps };
