import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridBoldProps = Omit<IconBaseProps, 'children'>;

const GridBold = memo(
  forwardRef<SVGSVGElement, GridBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="grid-bold" {...props}>
      <path fillRule="evenodd" d="M14.77 2.5h.14q1.1 0 1.9.06c.73.06 1.37.18 1.96.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96a26 26 0 0 1 .06 1.98v5.74q0 1.1-.06 1.9a5 5 0 0 1-.48 1.96 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-.8.06-1.9.06H9.09q-1.1 0-1.9-.06a5 5 0 0 1-1.96-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96a26 26 0 0 1-.06-1.98V9.1q0-1.1.06-1.9c.06-.73.18-1.37.48-1.96a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48a26 26 0 0 1 1.98-.06h5.6m-4.6 13.33v3.67h3.66v-3.67zm-5.66 0 .04.82c.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28l.82.04v-3.66zm11.32 0v3.66l.82-.04c.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22l.04-.82zm-11.33-2h3.67v-3.66H4.5zm5.67 0h3.66v-3.66h-3.66zm5.66 0h3.67v-3.66h-3.67zM8.17 4.51l-.82.04c-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22l-.04.82h3.66zm2 3.66h3.66V4.5h-3.66zm5.66 0h3.66l-.04-.82a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28l-.82-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridBold.displayName = 'GridBold';

// Triple export pattern (lucide-react style)
export { GridBold, GridBold as GridBoldIcon, GridBold as SiGridBold };
export default GridBold;
export type { GridBoldProps };
