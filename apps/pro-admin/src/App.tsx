import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AssociationList } from "./association/AssociationList";
import { AssociationCreate } from "./association/AssociationCreate";
import { AssociationEdit } from "./association/AssociationEdit";
import { AssociationShow } from "./association/AssociationShow";
import { FederationList } from "./federation/FederationList";
import { FederationCreate } from "./federation/FederationCreate";
import { FederationEdit } from "./federation/FederationEdit";
import { FederationShow } from "./federation/FederationShow";
import { AgenceList } from "./agence/AgenceList";
import { AgenceCreate } from "./agence/AgenceCreate";
import { AgenceEdit } from "./agence/AgenceEdit";
import { AgenceShow } from "./agence/AgenceShow";
import { UtilisateurList } from "./utilisateur/UtilisateurList";
import { UtilisateurCreate } from "./utilisateur/UtilisateurCreate";
import { UtilisateurEdit } from "./utilisateur/UtilisateurEdit";
import { UtilisateurShow } from "./utilisateur/UtilisateurShow";
import { AffectationList } from "./affectation/AffectationList";
import { AffectationCreate } from "./affectation/AffectationCreate";
import { AffectationEdit } from "./affectation/AffectationEdit";
import { AffectationShow } from "./affectation/AffectationShow";
import { StructureList } from "./structure/StructureList";
import { StructureCreate } from "./structure/StructureCreate";
import { StructureEdit } from "./structure/StructureEdit";
import { StructureShow } from "./structure/StructureShow";
import { EnumStructureTypeFieldList } from "./enumStructureTypeField/EnumStructureTypeFieldList";
import { EnumStructureTypeFieldCreate } from "./enumStructureTypeField/EnumStructureTypeFieldCreate";
import { EnumStructureTypeFieldEdit } from "./enumStructureTypeField/EnumStructureTypeFieldEdit";
import { EnumStructureTypeFieldShow } from "./enumStructureTypeField/EnumStructureTypeFieldShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"pro"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Association"
          list={AssociationList}
          edit={AssociationEdit}
          create={AssociationCreate}
          show={AssociationShow}
        />
        <Resource
          name="Federation"
          list={FederationList}
          edit={FederationEdit}
          create={FederationCreate}
          show={FederationShow}
        />
        <Resource
          name="Agence"
          list={AgenceList}
          edit={AgenceEdit}
          create={AgenceCreate}
          show={AgenceShow}
        />
        <Resource
          name="Utilisateur"
          list={UtilisateurList}
          edit={UtilisateurEdit}
          create={UtilisateurCreate}
          show={UtilisateurShow}
        />
        <Resource
          name="Affectation"
          list={AffectationList}
          edit={AffectationEdit}
          create={AffectationCreate}
          show={AffectationShow}
        />
        <Resource
          name="Structure"
          list={StructureList}
          edit={StructureEdit}
          create={StructureCreate}
          show={StructureShow}
        />
        <Resource
          name="EnumStructureTypeField"
          list={EnumStructureTypeFieldList}
          edit={EnumStructureTypeFieldEdit}
          create={EnumStructureTypeFieldCreate}
          show={EnumStructureTypeFieldShow}
        />
      </Admin>
    </div>
  );
};

export default App;
