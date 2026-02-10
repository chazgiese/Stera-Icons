import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronSquareLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronSquareLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronSquareLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-square-left-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56a5.8 5.8 0 0 1 2.51 2.51c.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34s0 2.47-.07 3.34c-.07.88-.22 1.61-.56 2.27a5.8 5.8 0 0 1-2.51 2.51c-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07s-2.47 0-3.34-.07a6 6 0 0 1-2.27-.56 5.8 5.8 0 0 1-2.51-2.51 6 6 0 0 1-.56-2.27c-.07-.87-.07-1.95-.07-3.34s0-2.47.07-3.34c.07-.88.22-1.61.56-2.27a5.8 5.8 0 0 1 2.51-2.51 6 6 0 0 1 2.27-.56c.87-.07 1.95-.07 3.34-.07m0 1.5c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23s0 2.43.07 3.22c.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06s2.43 0 3.22-.07c.79-.06 1.3-.18 1.71-.4.8-.4 1.45-1.05 1.86-1.85.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23s0-2.43-.07-3.22a5 5 0 0 0-.4-1.71 4.3 4.3 0 0 0-1.85-1.86 5 5 0 0 0-1.7-.4c-.8-.06-1.82-.06-3.23-.06" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.97 7.47a.75.75 0 0 1 1.06 1.06L10.56 12l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

ChevronSquareLeftRegularDuotone.displayName = 'ChevronSquareLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronSquareLeftRegularDuotone, ChevronSquareLeftRegularDuotone as ChevronSquareLeftRegularDuotoneIcon, ChevronSquareLeftRegularDuotone as SiChevronSquareLeftRegularDuotone };
export default ChevronSquareLeftRegularDuotone;
export type { ChevronSquareLeftRegularDuotoneProps };
