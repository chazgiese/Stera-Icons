import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AstriskAltRegularProps = Omit<IconBaseProps, 'children'>;

const AstriskAltRegular = memo(
  forwardRef<SVGSVGElement, AstriskAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="astrisk-alt" {...props}>
      <path fill="currentColor" d="M12 2.25c.52 0 1.02.18 1.36.51s.5.78.39 1.24a35 35 0 0 0-.91 5.69c-.03.4.4.66.74.43a33 33 0 0 0 4.48-3.64c.34-.33.81-.4 1.26-.28.46.13.86.47 1.13.92s.34.97.23 1.43-.41.83-.87.96a35 35 0 0 0-5.39 2.05.48.48 0 0 0 0 .86 33 33 0 0 0 5.4 2.06c.45.13.75.5.86.96.12.46.03.98-.23 1.43s-.67.79-1.12.92-.93.05-1.27-.28a34 34 0 0 0-4.48-3.64.48.48 0 0 0-.74.43 33 33 0 0 0 .91 5.7c.12.46-.05.9-.4 1.24-.33.33-.83.51-1.35.51s-1.02-.18-1.36-.51a1.3 1.3 0 0 1-.39-1.24 35 35 0 0 0 .91-5.7.48.48 0 0 0-.74-.42 33 33 0 0 0-4.47 3.63c-.34.33-.82.4-1.27.28a2 2 0 0 1-1.12-.92 2 2 0 0 1-.24-1.43c.12-.46.42-.83.88-.96a35 35 0 0 0 5.38-2.05.48.48 0 0 0 0-.87A33 33 0 0 0 4.2 9.51c-.46-.13-.76-.5-.87-.96-.12-.46-.03-.98.23-1.43.27-.45.67-.79 1.13-.92s.92-.05 1.26.28a35 35 0 0 0 4.47 3.63c.33.23.77-.03.74-.43A33 33 0 0 0 10.25 4c-.12-.46.06-.9.4-1.24.33-.33.83-.51 1.35-.51" />
    </IconBase>
  ))
);

AstriskAltRegular.displayName = 'AstriskAltRegular';

// Triple export pattern (lucide-react style)
export { AstriskAltRegular, AstriskAltRegular as AstriskAltRegularIcon, AstriskAltRegular as SiAstriskAltRegular };
export default AstriskAltRegular;
export type { AstriskAltRegularProps };
