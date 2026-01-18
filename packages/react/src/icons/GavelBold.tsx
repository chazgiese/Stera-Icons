import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GavelBoldProps = Omit<IconBaseProps, 'children'>;

const GavelBold = memo(
  forwardRef<SVGSVGElement, GavelBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.49 3a2 2 0 0 1 2.82 0l4.25 4.24a2 2 0 0 1 0 2.83l-.7.7a2 2 0 0 1-1.94.52l-.54.55 5.3 5.3a2.5 2.5 0 0 1-3.54 3.54l-5.3-5.3-.55.54a2 2 0 0 1-.51 1.93l-.7.7a2 2 0 0 1-2.84 0L3 14.32a2 2 0 0 1 0-2.82l.7-.71a2 2 0 0 1 1.94-.52l4.62-4.62a2 2 0 0 1 .52-1.93zm1.76 10.96 5.3 5.3a.5.5 0 0 0 .71-.7l-5.3-5.3zM4.41 12.9l4.25 4.24.7-.7-4.24-4.25zm2.83-1.41 2.83 2.82 4.24-4.24-2.82-2.83zm4.95-6.37 4.25 4.24.7-.7L12.9 4.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

GavelBold.displayName = 'GavelBold';

export { GavelBold };
export type { GavelBoldProps };
