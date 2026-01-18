import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MedalRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MedalRegularDuotone = memo(
  forwardRef<SVGSVGElement, MedalRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.55 11.43a6 6 0 0 0-1.76.8l-1.47-.73h-.07v-.04l-1.82-.9c-.59-.3-1.05-.52-1.4-.87q-.43-.45-.63-1.03c-.16-.46-.15-.97-.15-1.64V5.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03h9.6q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v1.82c0 .67 0 1.18-.15 1.64q-.2.59-.64 1.03c-.34.35-.8.57-1.4.87l-1.81.9v.04h-.07l-1.47.73a6 6 0 0 0-1.76-.8l1.8-.9V2.76h-6.5v7.79zM7.2 2.75c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v1.82a4 4 0 0 0 .07 1.15q.1.27.29.47a4 4 0 0 0 1 .57l1.14.58V2.75zm9.55 7.04 1.15-.58a4 4 0 0 0 1-.57q.19-.2.28-.47a4 4 0 0 0 .07-1.15V5.2q0-.83-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54 1 1 0 0 0-.52-.12c-.3-.02-.68-.02-1.25-.02h-.05z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 11.25a5.75 5.75 0 1 1 .01 11.5 5.75 5.75 0 0 1-.01-11.5m0 1.5a4.24 4.24 0 1 0-.01 8.49 4.24 4.24 0 0 0 .01-8.49" clipRule="evenodd" />
    </IconBase>
  ))
);

MedalRegularDuotone.displayName = 'MedalRegularDuotone';

export { MedalRegularDuotone };
export type { MedalRegularDuotoneProps };
