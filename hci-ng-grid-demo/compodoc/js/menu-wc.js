'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">&#x27;hci-ng-grid&#x27;</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/GridModule.html" data-type="entity-link">GridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GridModule-c22b72d994443572d9d95ceaf09cb66f"' : 'data-target="#xs-components-links-module-GridModule-c22b72d994443572d9d95ceaf09cb66f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GridModule-c22b72d994443572d9d95ceaf09cb66f"' :
                                            'id="xs-components-links-module-GridModule-c22b72d994443572d9d95ceaf09cb66f"' }>
                                            <li class="link">
                                                <a href="components/BigTextPopup.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BigTextPopup</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChoiceEditRenderer.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChoiceEditRenderer</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ColumnHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColumnHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompareFilterRenderer.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompareFilterRenderer</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfigMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigMultiChoiceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfigMultiChoiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectFilterRenderer.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectFilterRenderer</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextEditRenderer.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextEditRenderer</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextFilterRenderer.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextFilterRenderer</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-GridModule-c22b72d994443572d9d95ceaf09cb66f"' : 'data-target="#xs-pipes-links-module-GridModule-c22b72d994443572d9d95ceaf09cb66f"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-GridModule-c22b72d994443572d9d95ceaf09cb66f"' :
                                            'id="xs-pipes-links-module-GridModule-c22b72d994443572d9d95ceaf09cb66f"' }>
                                            <li class="link">
                                                <a href="pipes/IsFixedPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsFixedPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/IsGroupPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsGroupPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/IsRowVisiblePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsRowVisiblePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/IsVisiblePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsVisiblePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Cell.html" data-type="entity-link">Cell</a>
                            </li>
                            <li class="link">
                                <a href="classes/CellEditRenderer.html" data-type="entity-link">CellEditRenderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/CellHoverPopupListener.html" data-type="entity-link">CellHoverPopupListener</a>
                            </li>
                            <li class="link">
                                <a href="classes/CellNumberRangeView.html" data-type="entity-link">CellNumberRangeView</a>
                            </li>
                            <li class="link">
                                <a href="classes/CellPopupRenderer.html" data-type="entity-link">CellPopupRenderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/CellTextView.html" data-type="entity-link">CellTextView</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckRowSelectView.html" data-type="entity-link">CheckRowSelectView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClickCellEditListener.html" data-type="entity-link">ClickCellEditListener</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClickRowSelectListener.html" data-type="entity-link">ClickRowSelectListener</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClickView.html" data-type="entity-link">ClickView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClickViewListener.html" data-type="entity-link">ClickViewListener</a>
                            </li>
                            <li class="link">
                                <a href="classes/Column.html" data-type="entity-link">Column</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnDndListener.html" data-type="entity-link">ColumnDndListener</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateIso8601Formatter.html" data-type="entity-link">DateIso8601Formatter</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateMsFormatter.html" data-type="entity-link">DateMsFormatter</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmptyFactory.html" data-type="entity-link">EmptyFactory</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventListener.html" data-type="entity-link">EventListener</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventMeta.html" data-type="entity-link">EventMeta</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterRenderer.html" data-type="entity-link">FilterRenderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormatterParser.html" data-type="entity-link">FormatterParser</a>
                            </li>
                            <li class="link">
                                <a href="classes/GroupKeyListener.html" data-type="entity-link">GroupKeyListener</a>
                            </li>
                            <li class="link">
                                <a href="classes/HtmlUtil.html" data-type="entity-link">HtmlUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/InjectableFactory.html" data-type="entity-link">InjectableFactory</a>
                            </li>
                            <li class="link">
                                <a href="classes/NumberFormatter.html" data-type="entity-link">NumberFormatter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Point.html" data-type="entity-link">Point</a>
                            </li>
                            <li class="link">
                                <a href="classes/Range.html" data-type="entity-link">Range</a>
                            </li>
                            <li class="link">
                                <a href="classes/RangeSelectListener.html" data-type="entity-link">RangeSelectListener</a>
                            </li>
                            <li class="link">
                                <a href="classes/Row.html" data-type="entity-link">Row</a>
                            </li>
                            <li class="link">
                                <a href="classes/RowChange.html" data-type="entity-link">RowChange</a>
                            </li>
                            <li class="link">
                                <a href="classes/RowDblClickListener.html" data-type="entity-link">RowDblClickListener</a>
                            </li>
                            <li class="link">
                                <a href="classes/RowGroup.html" data-type="entity-link">RowGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/RowGroupView.html" data-type="entity-link">RowGroupView</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GridEventService.html" data-type="entity-link">GridEventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GridGlobalService.html" data-type="entity-link">GridGlobalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GridMessageService.html" data-type="entity-link">GridMessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GridService.html" data-type="entity-link">GridService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CellViewRenderer.html" data-type="entity-link">CellViewRenderer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClickListener.html" data-type="entity-link">ClickListener</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DblClickListener.html" data-type="entity-link">DblClickListener</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Dictionary.html" data-type="entity-link">Dictionary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmptyConstructor.html" data-type="entity-link">EmptyConstructor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EventListenerArg.html" data-type="entity-link">EventListenerArg</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InjectableConstructor.html" data-type="entity-link">InjectableConstructor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MouseDownListener.html" data-type="entity-link">MouseDownListener</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MouseDragListener.html" data-type="entity-link">MouseDragListener</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MouseOutListener.html" data-type="entity-link">MouseOutListener</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MouseOverListener.html" data-type="entity-link">MouseOverListener</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MouseUpListener.html" data-type="entity-link">MouseUpListener</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});