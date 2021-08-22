
import * as AppState from "./../../+state/app.state";

import { ProductState } from "./product.reducer";

export interface State extends AppState.State {
  products: ProductState;
}
