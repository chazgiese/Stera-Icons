import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SquarePlaceholderRegularProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderRegular = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-placeholder" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56a5.8 5.8 0 0 1 2.51 2.51c.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 2.17 0 3.63-.3 4.75q-.12.45-.33.86a5.8 5.8 0 0 1-3.37 2.84c-1.12.3-2.58.3-4.75.3h-2c-1.39 0-2.47 0-3.34-.07a6 6 0 0 1-2.27-.56 5.8 5.8 0 0 1-2.51-2.51 6 6 0 0 1-.56-2.27c-.07-.87-.07-1.95-.07-3.34v-2c0-2.17 0-3.63.3-4.75q.12-.45.33-.86a5.8 5.8 0 0 1 3.37-2.84c1.12-.3 2.58-.3 4.75-.3zM3.8 8.04c-.05.74-.05 1.68-.05 2.96v1.24l8.01 8.01H13c1.28 0 2.22 0 2.96-.05zm-.04 6.32q0 1.11.06 1.86c.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4q.76.05 1.87.05zM6.07 4.21a4.3 4.3 0 0 0-1.94 2.04l13.62 13.62.18-.08a4.3 4.3 0 0 0 1.94-2.04L6.25 4.13zM11 3.75c-1.28 0-2.22 0-2.96.05L20.2 15.96c.05-.74.05-1.68.05-2.96v-1.24l-8.01-8.01zm9.24 5.89q0-1.11-.06-1.86a5 5 0 0 0-.4-1.71 4.3 4.3 0 0 0-1.85-1.86 5 5 0 0 0-1.7-.4q-.76-.05-1.87-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquarePlaceholderRegular.displayName = 'SquarePlaceholderRegular';

// Triple export pattern (lucide-react style)
export { SquarePlaceholderRegular, SquarePlaceholderRegular as SquarePlaceholderRegularIcon, SquarePlaceholderRegular as SiSquarePlaceholderRegular };
export default SquarePlaceholderRegular;
export type { SquarePlaceholderRegularProps };
