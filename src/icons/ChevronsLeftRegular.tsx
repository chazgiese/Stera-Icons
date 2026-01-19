import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftRegular = memo(
  forwardRef<SVGSVGElement, ChevronsLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-left" {...props}>
      <path fill="currentColor" d="M10.47 4.47a.75.75 0 1 1 1.06 1.06L5.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06z" />
        <path fill="currentColor" d="M18.47 4.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

ChevronsLeftRegular.displayName = 'ChevronsLeftRegular';

// Triple export pattern (lucide-react style)
export { ChevronsLeftRegular, ChevronsLeftRegular as ChevronsLeftRegularIcon, ChevronsLeftRegular as SiChevronsLeftRegular };
export default ChevronsLeftRegular;
export type { ChevronsLeftRegularProps };
