import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PieRegularProps = Omit<IconBaseProps, 'children'>;

const PieRegular = memo(
  forwardRef<SVGSVGElement, PieRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="pie" {...props}>
      <path fill="currentColor" d="M9.47 7.47a.75.75 0 0 1 1.06 1.06l-1 1a.75.75 0 0 1-1.06-1.06zM13.47 7.47c.3-.3.77-.3 1.06 0l1 1a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4.25c4.97 0 9.1 2.8 10.5 6.79.2.59.26 1.35-.13 2.03a3.4 3.4 0 0 1-2.03 1.57q-.04.16-.09.28l-1.07 3a2.75 2.75 0 0 1-2.59 1.83H7.41c-1.16 0-2.2-.73-2.59-1.83l-1.07-3-.08-.28a3.4 3.4 0 0 1-2.04-1.57 2.5 2.5 0 0 1-.12-2.03C2.9 7.06 7.03 4.25 12 4.25m5 9.34a3.28 3.28 0 0 1-5 0 3.28 3.28 0 0 1-5 0 3.3 3.3 0 0 1-1.75 1.07l.98 2.76c.18.5.65.83 1.18.83h9.18c.53 0 1-.33 1.18-.83l.98-2.76A3.3 3.3 0 0 1 17 13.59m-5-7.84c-4.42 0-7.92 2.49-9.08 5.78q-.16.51.01.79a1.8 1.8 0 0 0 1.57.93c.84 0 1.56-.6 1.77-1.43a.75.75 0 0 1 1.46 0c.2.84.94 1.43 1.77 1.43s1.56-.6 1.77-1.43a.75.75 0 0 1 1.46 0c.2.84.94 1.43 1.77 1.43s1.56-.6 1.77-1.43a.75.75 0 0 1 1.46 0 1.85 1.85 0 0 0 1.89 1.43c.6-.04 1.15-.4 1.45-.93.1-.18.13-.45 0-.79-1.15-3.3-4.65-5.78-9.07-5.78" clipRule="evenodd" />
    </IconBase>
  ))
);

PieRegular.displayName = 'PieRegular';

// Triple export pattern (lucide-react style)
export { PieRegular, PieRegular as PieRegularIcon, PieRegular as SiPieRegular };
export default PieRegular;
export type { PieRegularProps };
