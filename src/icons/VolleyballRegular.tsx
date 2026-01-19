import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type VolleyballRegularProps = Omit<IconBaseProps, 'children'>;

const VolleyballRegular = memo(
  forwardRef<SVGSVGElement, VolleyballRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="volleyball" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.7 10.7 0 0 1 9.4 5.54A10.75 10.75 0 1 1 12 1.25M6.26 11.71a13.5 13.5 0 0 0 5.25 9.53l.49.01q1.6 0 3.03-.51c-1-.6-1.76-1.42-2.32-2.32l-.16-.27-.22-.4a12 12 0 0 1-1.1-3.48 16 16 0 0 1-.16-1.18 17 17 0 0 0-4.8-1.38m-1.5.03c-.87.12-1.5.45-1.99.89a9.3 9.3 0 0 0 5.86 7.98 15 15 0 0 1-3.87-8.87m16.3-1.62c-.86 2.83-3 5.64-6.8 7.91a5 5 0 0 0 2.56 1.87 9.2 9.2 0 0 0 4.24-9.78M17.82 4.8a8 8 0 0 1-1.61 3.98 27 27 0 0 1-3.65 4.09 15 15 0 0 0 .65 3.1l.3.75c4.66-2.8 6.41-6.29 6.49-9.38a9 9 0 0 0-2.18-2.54m-7.57 1.62a7.7 7.7 0 0 0-6.4 1.18 9 9 0 0 0-1.02 3.17q1.05-.55 2.59-.6a9 9 0 0 1 2.5.28q1.63.36 3.7 1.23a27 27 0 0 0 2.97-3.22 11 11 0 0 0-4.34-2.04M12 2.75c-2.3 0-4.4.84-6.02 2.23a10 10 0 0 1 4.6 0 13 13 0 0 1 4.85 2.25q1.18-2.02.8-3.46A9 9 0 0 0 12 2.75" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballRegular.displayName = 'VolleyballRegular';

// Triple export pattern (lucide-react style)
export { VolleyballRegular, VolleyballRegular as VolleyballRegularIcon, VolleyballRegular as SiVolleyballRegular };
export type { VolleyballRegularProps };
