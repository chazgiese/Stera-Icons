import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoSquareFillProps = Omit<IconBaseProps, 'children'>;

const InfoSquareFill = memo(
  forwardRef<SVGSVGElement, InfoSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.13c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v2c0 1.39 0 2.48-.07 3.36s-.22 1.63-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-2c-1.39 0-2.48 0-3.36-.07s-1.63-.22-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56-.35-.68-.5-1.43-.57-2.31-.08-.88-.08-1.97-.08-3.36v-2c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-1 9.5c-.48 0-.87.39-.87.87V16c0 .48.39.88.87.88s.88-.4.88-.88v-3.5c0-.48-.4-.87-.88-.87m0-4.5c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37" clipRule="evenodd" />
    </IconBase>
  ))
);

InfoSquareFill.displayName = 'InfoSquareFill';

// Triple export pattern
export { InfoSquareFill, InfoSquareFill as InfoSquareFillIcon, InfoSquareFill as SiInfoSquareFill };
export default InfoSquareFill;
export type { InfoSquareFillProps };
