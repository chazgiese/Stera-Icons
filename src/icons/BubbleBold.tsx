import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BubbleBoldProps = Omit<IconBaseProps, 'children'>;

const BubbleBold = memo(
  forwardRef<SVGSVGElement, BubbleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bubble-bold" {...props}>
      <path fill="currentColor" d="M10.75 4.6c.39-.09.79-.02 1.11.21s.55.6.62 1.02-.02.85-.25 1.17c-.23.33-.59.52-.98.56l-.28.03a4.8 4.8 0 0 0-3.9 3.57q-.1.38-.43.6a1 1 0 0 1-.71.16 1 1 0 0 1-.62-.38c-.16-.2-.24-.46-.21-.7q.01-.23.06-.44a7.3 7.3 0 0 1 5.6-5.8" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

BubbleBold.displayName = 'BubbleBold';

// Triple export pattern (lucide-react style)
export { BubbleBold, BubbleBold as BubbleBoldIcon, BubbleBold as SiBubbleBold };
export default BubbleBold;
export type { BubbleBoldProps };
