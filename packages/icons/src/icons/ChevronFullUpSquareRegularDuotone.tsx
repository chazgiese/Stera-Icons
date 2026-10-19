import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpSquareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpSquareRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullUpSquareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-2 1.5c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v2c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h2c1.41 0 2.43 0 3.22-.07.79-.06 1.3-.18 1.71-.4.8-.4 1.45-1.05 1.86-1.85.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23v-2c0-1.41 0-2.43-.07-3.22-.06-.79-.18-1.3-.4-1.71-.4-.8-1.05-1.45-1.85-1.86-.41-.2-.92-.33-1.7-.4-.8-.06-1.82-.06-3.23-.06z" clipRule="evenodd" opacity={.4} />
        <path d="M11.21 9.04c.4-.51 1.18-.51 1.58 0l2.99 3.85c.5.65.04 1.61-.8 1.61H9.02c-.83 0-1.3-.96-.79-1.61z" />
    </IconBase>
  ))
);

ChevronFullUpSquareRegularDuotone.displayName = 'ChevronFullUpSquareRegularDuotone';

// Triple export pattern
export { ChevronFullUpSquareRegularDuotone, ChevronFullUpSquareRegularDuotone as ChevronFullUpSquareRegularDuotoneIcon, ChevronFullUpSquareRegularDuotone as SiChevronFullUpSquareRegularDuotone };
export default ChevronFullUpSquareRegularDuotone;
export type { ChevronFullUpSquareRegularDuotoneProps };
