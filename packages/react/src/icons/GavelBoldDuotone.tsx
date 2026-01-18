import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GavelBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GavelBoldDuotone = memo(
  forwardRef<SVGSVGElement, GavelBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.26 5.64q.13.5.52.9l.7.7-4.24 4.25 2.83 2.82 4.24-4.24.71.7q.4.4.9.52l-.54.55 5.3 5.3a2.5 2.5 0 0 1-3.54 3.54l-5.3-5.3-.55.54a2 2 0 0 0-.51-.9l-4.24-4.24a2 2 0 0 0-.9-.52zm3 8.32 5.3 5.3a.5.5 0 0 0 .7-.7l-5.3-5.3z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M3.7 10.78a2 2 0 0 1 2.83 0l4.25 4.24a2 2 0 0 1 0 2.83l-.7.7a2 2 0 0 1-2.84 0L3 14.32a2 2 0 0 1 0-2.82zm.71 2.12 4.25 4.24.7-.7-4.24-4.25zM11.49 3a2 2 0 0 1 2.82 0l4.25 4.24a2 2 0 0 1 0 2.83l-.71.7a2 2 0 0 1-2.83 0l-4.24-4.23a2 2 0 0 1 0-2.83zm.7 2.12 4.25 4.24.7-.7L12.9 4.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

GavelBoldDuotone.displayName = 'GavelBoldDuotone';

// Triple export pattern (lucide-react style)
export { GavelBoldDuotone, GavelBoldDuotone as GavelBoldDuotoneIcon, GavelBoldDuotone as SiGavelBoldDuotone };
export type { GavelBoldDuotoneProps };
