import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BubbleFillProps = Omit<IconBaseProps, 'children'>;

const BubbleFill = memo(
  forwardRef<SVGSVGElement, BubbleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bubble-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m-.14 3.56c-.32-.23-.72-.3-1.1-.2l-.46.1a7.3 7.3 0 0 0-5.2 6.13c-.03.24.05.5.2.7a1 1 0 0 0 .63.38 1 1 0 0 0 .71-.16q.33-.22.43-.6l.08-.3a4.8 4.8 0 0 1 4.1-3.3q.62-.06.98-.56c.23-.32.32-.75.25-1.17s-.3-.79-.62-1.02" clipRule="evenodd" />
    </IconBase>
  ))
);

BubbleFill.displayName = 'BubbleFill';

// Triple export pattern (lucide-react style)
export { BubbleFill, BubbleFill as BubbleFillIcon, BubbleFill as SiBubbleFill };
export type { BubbleFillProps };
