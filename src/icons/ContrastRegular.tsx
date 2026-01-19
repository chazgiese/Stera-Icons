import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ContrastRegularProps = Omit<IconBaseProps, 'children'>;

const ContrastRegular = memo(
  forwardRef<SVGSVGElement, ContrastRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="contrast" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 0 0 0 18.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastRegular.displayName = 'ContrastRegular';

// Triple export pattern (lucide-react style)
export { ContrastRegular, ContrastRegular as ContrastRegularIcon, ContrastRegular as SiContrastRegular };
export type { ContrastRegularProps };
