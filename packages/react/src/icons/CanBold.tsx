import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CanBoldProps = Omit<IconBaseProps, 'children'>;

const CanBold = memo(
  forwardRef<SVGSVGElement, CanBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.5 2a1 1 0 0 1 .21 1.98l.37.64A7 7 0 0 1 19 8.09v7.82a7 7 0 0 1-.92 3.47l-.64 1.1a3 3 0 0 1-2.6 1.52H9.16a3 3 0 0 1-2.6-1.51l-.64-1.11A7 7 0 0 1 5 15.91V8.09a7 7 0 0 1 .92-3.47l.37-.64A1 1 0 0 1 6.5 2zM8.58 4l-.92 1.61A5 5 0 0 0 7 8.1v7.82a5 5 0 0 0 .66 2.48l.63 1.1c.18.32.51.51.87.51h5.68a1 1 0 0 0 .87-.5l.63-1.11A5 5 0 0 0 17 15.9V8.09a5 5 0 0 0-.66-2.48L15.42 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

CanBold.displayName = 'CanBold';

export { CanBold };
export type { CanBoldProps };
