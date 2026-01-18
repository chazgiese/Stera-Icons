import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CameraFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraFillDuotone = memo(
  forwardRef<SVGSVGElement, CameraFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.29 3.25c.58 0 1.02 0 1.44.12q.52.16.95.5c.33.28.57.66.9 1.14l.31.48.22.32q.33.37.82.43l.38.01c.6 0 1.01 0 1.36.06a3.75 3.75 0 0 1 3.02 3.02c.06.35.06.75.06 1.36v4.51q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H6.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-4.51c0-.6 0-1.01.06-1.36a3.75 3.75 0 0 1 3.02-3.02c.35-.06.75-.06 1.36-.06h.38q.5-.07.82-.44l.22-.32.32-.48c.32-.48.56-.86.9-1.13q.42-.35.94-.51c.42-.13.86-.12 1.44-.12zM12 9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 9.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

CameraFillDuotone.displayName = 'CameraFillDuotone';

export { CameraFillDuotone };
export type { CameraFillDuotoneProps };
