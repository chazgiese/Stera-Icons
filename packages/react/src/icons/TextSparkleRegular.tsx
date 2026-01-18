import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextSparkleRegularProps = Omit<IconBaseProps, 'children'>;

const TextSparkleRegular = memo(
  forwardRef<SVGSVGElement, TextSparkleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16.39 10.26a.65.65 0 0 1 1.22 0l.25.69a5.2 5.2 0 0 0 3.2 3.2l.68.24a.65.65 0 0 1 0 1.22l-.69.25a5.2 5.2 0 0 0-3.2 3.2l-.24.68a.65.65 0 0 1-1.22 0l-.25-.69a5.2 5.2 0 0 0-3.2-3.2l-.68-.24a.65.65 0 0 1 0-1.22l.69-.25a5.2 5.2 0 0 0 3.2-3.2zM8 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM8 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextSparkleRegular.displayName = 'TextSparkleRegular';

export { TextSparkleRegular };
export type { TextSparkleRegularProps };
