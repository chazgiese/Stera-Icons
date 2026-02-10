import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CupBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CupBoldDuotone = memo(
  forwardRef<SVGSVGElement, CupBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cup-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M19.84 9.02A3.5 3.5 0 0 1 19.5 16h-.99a8 8 0 0 1-6.92 4H10.4a8 8 0 0 1-7.97-7.37L2 7.17c.08.75.69 1.22 1.11 1.47q.46.26 1.05.47l.26 3.36A6 6 0 0 0 10.41 18h1.18a6 6 0 0 0 5.98-5.53l.26-3.36q.6-.21 1.05-.47c.42-.25 1.03-.72 1.1-1.47zm-.28 3.6q-.05.72-.23 1.38h.17a1.5 1.5 0 0 0 .19-2.99z" clipRule="evenodd" opacity={0.4} />
        <path d="M2 7.11v-.03zM20 7.08v.03z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 4c2.27 0 4.35.23 5.9.62.77.19 1.46.43 1.98.74.46.27 1.12.8 1.12 1.64 0 .85-.66 1.37-1.12 1.64-.52.3-1.21.55-1.98.74-1.55.4-3.63.62-5.9.62s-4.35-.23-5.9-.62a8 8 0 0 1-1.98-.74C2.66 8.37 2 7.84 2 7c0-.85.66-1.37 1.12-1.64.52-.3 1.21-.55 1.98-.74C6.65 4.22 8.73 4 11 4m0 2c-2.15 0-4.07.22-5.41.56q-.85.22-1.3.44.45.23 1.3.44C6.93 7.78 8.85 8 11 8s4.07-.22 5.41-.56q.85-.22 1.3-.44-.45-.23-1.3-.44A24 24 0 0 0 11 6" clipRule="evenodd" />
    </IconBase>
  ))
);

CupBoldDuotone.displayName = 'CupBoldDuotone';

// Triple export pattern (lucide-react style)
export { CupBoldDuotone, CupBoldDuotone as CupBoldDuotoneIcon, CupBoldDuotone as SiCupBoldDuotone };
export default CupBoldDuotone;
export type { CupBoldDuotoneProps };
