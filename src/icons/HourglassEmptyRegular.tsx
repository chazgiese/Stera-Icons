import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HourglassEmptyRegularProps = Omit<IconBaseProps, 'children'>;

const HourglassEmptyRegular = memo(
  forwardRef<SVGSVGElement, HourglassEmptyRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="hourglass-empty" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.5 3.25a.75.75 0 0 1 0 1.5h-.75V6c0 .87 0 1.46-.15 2q-.22.7-.67 1.27c-.35.45-.83.78-1.55 1.28L13.31 12l2.07 1.45c.72.5 1.2.83 1.55 1.28q.45.56.67 1.27c.16.54.15 1.13.15 2v1.25h.75a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1 0-1.5h.75V18c0-.87 0-1.46.15-2q.21-.7.67-1.27c.35-.45.83-.78 1.55-1.28L10.69 12l-2.07-1.45c-.72-.5-1.2-.83-1.55-1.28Q6.6 8.71 6.4 8c-.16-.54-.15-1.13-.15-2V4.75H5.5a.75.75 0 0 1 0-1.5zM9.48 14.68c-.79.55-1.05.75-1.24.98q-.13.15-.22.34h7.96l-.22-.34a6 6 0 0 0-1.24-.98L12 12.92zM7.75 6c0 .96 0 1.29.1 1.58q.1.41.39.76c.19.23.45.43 1.24.98L12 11.08l2.52-1.76a6 6 0 0 0 1.24-.98q.27-.35.4-.76c.08-.3.09-.62.09-1.58V4.75h-8.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

HourglassEmptyRegular.displayName = 'HourglassEmptyRegular';

// Triple export pattern (lucide-react style)
export { HourglassEmptyRegular, HourglassEmptyRegular as HourglassEmptyRegularIcon, HourglassEmptyRegular as SiHourglassEmptyRegular };
export default HourglassEmptyRegular;
export type { HourglassEmptyRegularProps };
