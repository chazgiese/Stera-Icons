import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GlobeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GlobeBoldDuotone = memo(
  forwardRef<SVGSVGElement, GlobeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3q1.16 0 2.24.28A16 16 0 0 1 16.8 11h4.14a9 9 0 0 1 0 2H16.8a16 16 0 0 1-2.56 7.72 9 9 0 0 1-4.48 0A16 16 0 0 1 7.2 13H3.06a9 9 0 0 1 0-2H7.2a16 16 0 0 1 2.56-7.72A9 9 0 0 1 12 3M9.2 13a14 14 0 0 0 2.8 7.43A14 14 0 0 0 14.8 13zM12 3.57A14 14 0 0 0 9.2 11h5.6A14 14 0 0 0 12 3.57" clipRule="evenodd" />
        <path d="M11.95 1h.01M12.04 1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeBoldDuotone.displayName = 'GlobeBoldDuotone';

export { GlobeBoldDuotone };
export type { GlobeBoldDuotoneProps };
