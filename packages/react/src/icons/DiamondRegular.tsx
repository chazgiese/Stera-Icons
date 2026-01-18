import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DiamondRegularProps = Omit<IconBaseProps, 'children'>;

const DiamondRegular = memo(
  forwardRef<SVGSVGElement, DiamondRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.84 1.68a3.8 3.8 0 0 1 2.32 0q.69.23 1.3.78.6.53 1.46 1.4l4.22 4.22q.87.86 1.4 1.46.55.61.78 1.3c.25.75.25 1.57 0 2.32q-.23.69-.78 1.3-.53.6-1.4 1.46l-4.22 4.22q-.86.87-1.46 1.4-.61.55-1.3.78c-.75.25-1.57.25-2.32 0a4 4 0 0 1-1.3-.78q-.6-.53-1.46-1.4l-4.22-4.22q-.87-.86-1.4-1.46a4 4 0 0 1-.78-1.3 3.8 3.8 0 0 1 0-2.32q.23-.69.78-1.3.53-.6 1.4-1.46l4.22-4.22q.86-.87 1.46-1.4.61-.55 1.3-.78M12.7 3.1a2.3 2.3 0 0 0-1.4 0c-.2.07-.44.2-.79.5s-.77.72-1.37 1.32L4.92 9.14c-.6.6-1.02 1.02-1.32 1.37s-.43.58-.5.8q-.21.69 0 1.39c.07.2.2.44.5.79s.72.77 1.32 1.37l4.22 4.22c.6.6 1.02 1.02 1.37 1.32s.58.43.8.5q.69.21 1.39 0c.2-.07.44-.2.79-.5s.77-.72 1.37-1.32l4.22-4.22c.6-.6 1.02-1.02 1.32-1.37s.43-.58.5-.8q.21-.69 0-1.39a2 2 0 0 0-.5-.79c-.3-.35-.72-.77-1.32-1.37l-4.22-4.22c-.6-.6-1.02-1.02-1.37-1.32a2 2 0 0 0-.8-.5" clipRule="evenodd" />
    </IconBase>
  ))
);

DiamondRegular.displayName = 'DiamondRegular';

// Triple export pattern (lucide-react style)
export { DiamondRegular, DiamondRegular as DiamondRegularIcon, DiamondRegular as SiDiamondRegular };
export type { DiamondRegularProps };
