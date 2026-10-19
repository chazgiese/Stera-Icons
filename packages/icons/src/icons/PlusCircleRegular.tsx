import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleRegularProps = Omit<IconBaseProps, 'children'>;

const PlusCircleRegular = memo(
  forwardRef<SVGSVGElement, PlusCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.25c.42 0 .75.34.75.75v3.25H16c.41 0 .75.33.75.75 0 .4-.34.75-.75.75h-3.25V16c0 .41-.33.75-.75.75-.4 0-.75-.34-.75-.75v-3.25H8c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

PlusCircleRegular.displayName = 'PlusCircleRegular';

// Triple export pattern
export { PlusCircleRegular, PlusCircleRegular as PlusCircleRegularIcon, PlusCircleRegular as SiPlusCircleRegular };
export default PlusCircleRegular;
export type { PlusCircleRegularProps };
