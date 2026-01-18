import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ExclamationPointRegularProps = Omit<IconBaseProps, 'children'>;

const ExclamationPointRegular = memo(
  forwardRef<SVGSVGElement, ExclamationPointRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 18.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 2.25c.35 0 .68.13.91.37s.35.55.34.88l-.03.6-.44 10.8-.03.6a.76.76 0 0 1-.75.72.76.76 0 0 1-.75-.72l-.03-.6-.44-10.8-.03-.6q-.02-.51.34-.88c.23-.24.56-.37.91-.37" />
    </IconBase>
  ))
);

ExclamationPointRegular.displayName = 'ExclamationPointRegular';

// Triple export pattern (lucide-react style)
export { ExclamationPointRegular, ExclamationPointRegular as ExclamationPointRegularIcon, ExclamationPointRegular as SiExclamationPointRegular };
export type { ExclamationPointRegularProps };
