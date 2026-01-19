import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CliRegularProps = Omit<IconBaseProps, 'children'>;

const CliRegular = memo(
  forwardRef<SVGSVGElement, CliRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli" {...props}>
      <path fill="currentColor" d="M2.47 4.47c.3-.3.77-.3 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06-1.06L8.94 12 2.47 5.53a.75.75 0 0 1 0-1.06M22 18.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

CliRegular.displayName = 'CliRegular';

// Triple export pattern (lucide-react style)
export { CliRegular, CliRegular as CliRegularIcon, CliRegular as SiCliRegular };
export type { CliRegularProps };
