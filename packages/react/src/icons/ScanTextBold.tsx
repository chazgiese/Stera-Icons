import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanTextBoldProps = Omit<IconBaseProps, 'children'>;

const ScanTextBold = memo(
  forwardRef<SVGSVGElement, ScanTextBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 16a1 1 0 0 1 1 1v2.5c0 .28.22.5.5.5H7a1 1 0 1 1 0 2H4.5A2.5 2.5 0 0 1 2 19.5V17a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2.5a2.5 2.5 0 0 1-2.5 2.5H17a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 .5-.5V17a1 1 0 0 1 1-1M13 14.5a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM17 11a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM17 7.5a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2zM7 2a1 1 0 0 1 0 2H4.5a.5.5 0 0 0-.5.5V7a1 1 0 0 1-2 0V4.5A2.5 2.5 0 0 1 4.5 2zM19.5 2A2.5 2.5 0 0 1 22 4.5V7a1 1 0 1 1-2 0V4.5a.5.5 0 0 0-.5-.5H17a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanTextBold.displayName = 'ScanTextBold';

export { ScanTextBold };
export type { ScanTextBoldProps };
