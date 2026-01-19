import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsUpRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronsUpRegular = memo(
  forwardRef<SVGSVGElement, ChevronsUpRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-up" {...props}>
      <path fill="currentColor" d="M12 11.25q.31 0 .53.22l7 7a.75.75 0 1 1-1.06 1.06L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06l7-7a.8.8 0 0 1 .53-.22" />
        <path fill="currentColor" d="M12 3.25q.31 0 .53.22l7 7a.75.75 0 1 1-1.06 1.06L12 5.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06l7-7a.8.8 0 0 1 .53-.22" />
    </IconBase>
  ))
);

ChevronsUpRegular.displayName = 'ChevronsUpRegular';

// Triple export pattern (lucide-react style)
export { ChevronsUpRegular, ChevronsUpRegular as ChevronsUpRegularIcon, ChevronsUpRegular as SiChevronsUpRegular };
export type { ChevronsUpRegularProps };
