import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BubbleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BubbleFillDuotone = memo(
  forwardRef<SVGSVGElement, BubbleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bubble-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-.14 3.81c-.32-.23-.72-.3-1.1-.2l-.46.1a7.3 7.3 0 0 0-5.2 6.13c-.03.24.05.5.2.7a1 1 0 0 0 .63.38 1 1 0 0 0 .71-.16q.33-.22.43-.6l.08-.3a4.8 4.8 0 0 1 4.1-3.3q.62-.06.98-.56c.23-.32.32-.75.25-1.17s-.3-.79-.62-1.02" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10.75 4.6c.39-.09.79-.02 1.11.21q.5.37.62 1.03c.07.41-.02.84-.25 1.16-.23.33-.59.52-.98.56l-.28.03a4.8 4.8 0 0 0-3.9 3.58q-.1.37-.43.6a1 1 0 0 1-.71.15 1 1 0 0 1-.62-.38c-.16-.2-.24-.46-.21-.7q.02-.23.06-.44a7.3 7.3 0 0 1 5.6-5.8" />
    </IconBase>
  ))
);

BubbleFillDuotone.displayName = 'BubbleFillDuotone';

// Triple export pattern (lucide-react style)
export { BubbleFillDuotone, BubbleFillDuotone as BubbleFillDuotoneIcon, BubbleFillDuotone as SiBubbleFillDuotone };
export default BubbleFillDuotone;
export type { BubbleFillDuotoneProps };
