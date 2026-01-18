import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock7BoldProps = Omit<IconBaseProps, 'children'>;

const Clock7Bold = memo(
  forwardRef<SVGSVGElement, Clock7BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6l-.02.18v.03l-.01.04-.02.06-.01.03-.02.06-.03.05-.02.03v.02l-2 3.46a1 1 0 0 1-1.74-1L11 11.73V6a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock7Bold.displayName = 'Clock7Bold';

// Triple export pattern (lucide-react style)
export { Clock7Bold, Clock7Bold as Clock7BoldIcon, Clock7Bold as SiClock7Bold };
export type { Clock7BoldProps };
