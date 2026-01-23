import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AstriskAltRegularProps = Omit<IconBaseProps, 'children'>;

const AstriskAltRegular = memo(
  forwardRef<SVGSVGElement, AstriskAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="astrisk-alt" {...props}>
      <path fill="currentColor" d="M12 1.75c.52 0 1.01.18 1.35.51s.51.78.4 1.24a38 38 0 0 0-.97 7.16 37 37 0 0 0 5.71-4.42c.35-.33.82-.4 1.28-.27.45.13.85.46 1.11.9.26.46.35.98.23 1.43a1.3 1.3 0 0 1-.87.97A39 39 0 0 0 13.56 12a37 37 0 0 0 6.68 2.74c.46.14.75.5.87.97.11.45.03.97-.23 1.42s-.67.78-1.12.91a1.3 1.3 0 0 1-1.27-.27l-.64-.59a37 37 0 0 0-5.07-3.83 37 37 0 0 0 .97 7.15c.11.46-.06.9-.4 1.24s-.83.51-1.35.51-1.01-.18-1.35-.51a1.3 1.3 0 0 1-.4-1.24 39 39 0 0 0 .97-7.14 37 37 0 0 0-5.7 4.41c-.35.33-.82.4-1.27.27a2 2 0 0 1-1.12-.91 2 2 0 0 1-.23-1.43c.12-.45.41-.82.87-.96A39 39 0 0 0 10.45 12a37 37 0 0 0-6.68-2.73 1.3 1.3 0 0 1-.88-.97c-.11-.45-.02-.97.24-1.42s.66-.78 1.11-.91a1.3 1.3 0 0 1 1.28.27 39 39 0 0 0 5.7 4.42 37 37 0 0 0-.97-7.16c-.11-.46.06-.9.4-1.24s.83-.51 1.35-.51" />
    </IconBase>
  ))
);

AstriskAltRegular.displayName = 'AstriskAltRegular';

// Triple export pattern (lucide-react style)
export { AstriskAltRegular, AstriskAltRegular as AstriskAltRegularIcon, AstriskAltRegular as SiAstriskAltRegular };
export default AstriskAltRegular;
export type { AstriskAltRegularProps };
