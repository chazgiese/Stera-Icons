import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToggleOffRegularProps = Omit<IconBaseProps, 'children'>;

const ToggleOffRegular = memo(
  forwardRef<SVGSVGElement, ToggleOffRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5" />
        <path fill="currentColor" fillRule="evenodd" d="M15 4.25a7.75 7.75 0 0 1 0 15.5H9a7.75 7.75 0 0 1-.4-15.49l.4-.01zm-6 1.5h-.32A6.25 6.25 0 0 0 9 18.26h6a6.25 6.25 0 1 0 0-12.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToggleOffRegular.displayName = 'ToggleOffRegular';

export { ToggleOffRegular };
export type { ToggleOffRegularProps };
