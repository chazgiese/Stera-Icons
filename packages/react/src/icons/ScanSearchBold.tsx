import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanSearchBoldProps = Omit<IconBaseProps, 'children'>;

const ScanSearchBold = memo(
  forwardRef<SVGSVGElement, ScanSearchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M11 6a5 5 0 0 1 4.3 7.54l2.08 2.08a1.25 1.25 0 0 1-1.76 1.76l-2.08-2.07q-1.13.67-2.54.69a5 5 0 0 1 0-10m0 2a3 3 0 1 0 2.07 5.17l.05-.05.05-.05A3 3 0 0 0 11 8" clipRule="evenodd" />
        <path fill="currentColor" d="M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanSearchBold.displayName = 'ScanSearchBold';

export { ScanSearchBold };
export type { ScanSearchBoldProps };
