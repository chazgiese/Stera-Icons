import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CameraOffFillProps = Omit<IconBaseProps, 'children'>;

const CameraOffFill = memo(
  forwardRef<SVGSVGElement, CameraOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M1.8 1.8a1 1 0 0 1 1.4 0l20 20a1 1 0 0 1-1.4 1.4l-20-20a1 1 0 0 1 0-1.4M8.2 11.74a4 4 0 0 0 5.06 5.06l4.2 4.2H6q-1.02.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37Q.99 17.02 1 16v-5.5c0-.85-.01-1.52.17-2.08.29-.88.9-1.6 1.7-2.02zM13.7 3q.6-.01 1.1.13a3 3 0 0 1 1.03.55c.38.3.64.72.95 1.19l.22.33c.25.38.31.45.36.5a1 1 0 0 0 .51.28c.08.02.17.02.63.02.85 0 1.52-.01 2.08.17a3.5 3.5 0 0 1 2.25 2.25c.18.56.17 1.23.17 2.08V16q.01 1.03-.04 1.72c-.04.48-.12.93-.34 1.36l-6.66-6.66a4 4 0 0 0-3.38-3.38L7.7 4.17A3 3 0 0 1 10.3 3z" />
    </IconBase>
  ))
);

CameraOffFill.displayName = 'CameraOffFill';

export { CameraOffFill };
export type { CameraOffFillProps };
