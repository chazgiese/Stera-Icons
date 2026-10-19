import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridBoldProps = Omit<IconBaseProps, 'children'>;

const GridBold = memo(
  forwardRef<SVGSVGElement, GridBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v5.2q.02 1.65-.06 2.7c-.06.74-.18 1.38-.48 1.97-.48.94-1.25 1.7-2.19 2.19-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.4q-1.65.02-2.7-.06c-.74-.06-1.38-.18-1.97-.48-.94-.48-1.7-1.25-2.19-2.19-.3-.6-.42-1.23-.48-1.96Q1.99 16.25 2 14.6V9.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48Q7.75 1.99 9.4 2zM10 16v4h4v-4zm-6 0q.01.66.05 1.15c.05.6.14.95.28 1.21.28.57.74 1.03 1.3 1.31.27.14.62.23 1.22.28q.48.04 1.15.04V16zm12 0v4q.66-.01 1.15-.05c.6-.05.95-.14 1.21-.28q.87-.44 1.31-1.3c.14-.27.23-.62.28-1.22q.04-.48.04-1.15zM4 14h4v-4H4zm6 0h4v-4h-4zm6 0h4v-4h-4zM8 4q-.67.01-1.15.05c-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22q-.04.48-.04 1.15H8zm2 4h4V4h-4zm6 0h4q-.01-.67-.05-1.15c-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.27-.14-.62-.23-1.22-.28q-.48-.04-1.15-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridBold.displayName = 'GridBold';

// Triple export pattern
export { GridBold, GridBold as GridBoldIcon, GridBold as SiGridBold };
export default GridBold;
export type { GridBoldProps };
